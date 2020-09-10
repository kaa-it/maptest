/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This example creates a simple polygon representing the Bermuda Triangle.

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import fragmentMatcher from "./fragmentMatcher.js";
import gql from "graphql-tag";
import idx from "idx";

const LOGIN = gql`
  mutation {
    login(login: "localadmin", password: "1QaZ2WsX") {
      ... on Credentials {
        accessToken
        refreshToken
      }
      ... on Error {
        message
      }
    }
  }
`;

const GET_CM_IN_AREA = gql`
  query {
    controlModulesInArea(
      polygon: [
        { lat: 38.0986317710631, lng: 23.791923522949222 }
        { lat: 37.97789786422196, lng: 23.791923522949222 }
        { lat: 37.97789786422196, lng: 23.627128601074222 }
        { lat: 38.0986317710631, lng: 23.627128601074222 }
        { lat: 38.0986317710631, lng: 23.791923522949222 }
      ]
    ) {
      ... on ControlModules {
        items {
          id
          mac
          lat
          lng
          status
          lastReceivedAt
        }
      }
      ... on Error {
        message
      }
    }
  }
`;

async function initMap(): Promise<void> {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 13,
      center: { lat: 38.066743841880246, lng: 23.737678527832035 },
      mapTypeId: "terrain",
    }
  );

  // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 38.0986317710631, lng: 23.791923522949222 },
    { lat: 37.97789786422196, lng: 23.791923522949222 },
    { lat: 37.97789786422196, lng: 23.627128601074222 },
    { lat: 38.0986317710631, lng: 23.627128601074222 },
    { lat: 38.0986317710631, lng: 23.791923522949222 },
  ];

  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  bermudaTriangle.setMap(map);

  const httpLink = createHttpLink({ uri: "https://localhost:443/query" });
  const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem("token");
    if (token) {
      operation.setContext((context: Record<string, any>) => ({
        headers: {
          ...context.headers,
          authorization: token,
        },
      }));
    }

    return forward(operation);
  });
  const cache = new InMemoryCache({ fragmentMatcher });
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });

  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  try {
    const res = await apolloClient.mutate({ mutation: LOGIN });
    const typename = idx(res.data, (d) => d[Object.keys(d)[0]].__typename);
    switch (typename) {
      case "Credentials":
        const credentials = res.data[Object.keys(res.data)[0]];
        localStorage.setItem("token", credentials.accessToken);

        const cmRes = await apolloClient.query({
          query: GET_CM_IN_AREA,
          fetchPolicy: "network-only",
        });
        const typename = idx(
          cmRes.data,
          (d) => d[Object.keys(d)[0]].__typename
        );
        switch (typename) {
          case "ControlModules":
            const cms = cmRes.data[Object.keys(cmRes.data)[0]].items;
            console.log(cms.length);
            for (let i = 0; i < cms.length; i++) {
              new google.maps.Marker({
                position: { lat: cms[i].lat, lng: cms[i].lng },
                map,
                icon: image,
              });
            }
            break;
          default:
            console.log("error", cmRes.data[Object.keys(cmRes.data)[0]]);
        }
        break;
      default:
        console.log("error", res.data[Object.keys(res.data)[0]]);
    }
  } catch (e) {
    console.log("errorCatch", e);
  }
}

export { initMap };

import "./style.css"; // required for webpack
