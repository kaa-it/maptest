import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory";

const fm = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        { kind: "OBJECT", name: "AccessRights", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "CreateUserInput", possibleTypes: [] },
        { kind: "SCALAR", name: "String", possibleTypes: [] },
        { kind: "OBJECT", name: "Query", possibleTypes: [] },
        {
          kind: "INPUT_OBJECT",
          name: "UpdateControllerInput",
          possibleTypes: [],
        },
        { kind: "INPUT_OBJECT", name: "CreateLampInput", possibleTypes: [] },
        { kind: "OBJECT", name: "RolesRights", possibleTypes: [] },
        {
          kind: "INPUT_OBJECT",
          name: "UserGroupsRightsInput",
          possibleTypes: [],
        },
        { kind: "OBJECT", name: "PermissionDeniedError", possibleTypes: [] },
        { kind: "OBJECT", name: "NotSupportedError", possibleTypes: [] },
        { kind: "OBJECT", name: "LampWithDistance", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "CreateVendorInput", possibleTypes: [] },
        { kind: "OBJECT", name: "ControllersRights", possibleTypes: [] },
        { kind: "OBJECT", name: "Role", possibleTypes: [] },
        { kind: "OBJECT", name: "Success", possibleTypes: [] },
        { kind: "OBJECT", name: "IsInvalidError", possibleTypes: [] },
        { kind: "OBJECT", name: "User", possibleTypes: [] },
        {
          kind: "UNION",
          name: "ControllerResult",
          possibleTypes: [
            { name: "Controller" },
            { name: "UnauthorizedError" },
            { name: "TokenIsExpiredError" },
            { name: "PermissionDeniedError" },
            { name: "InternalServerError" },
          ],
        },
        { kind: "OBJECT", name: "UserGroupsRights", possibleTypes: [] },
        { kind: "OBJECT", name: "UsersRights", possibleTypes: [] },
        { kind: "OBJECT", name: "Mutation", possibleTypes: [] },
        {
          kind: "UNION",
          name: "UpdateControllerResult",
          possibleTypes: [
            { name: "Controller" },
            { name: "UnauthorizedError" },
            { name: "TokenIsExpiredError" },
            { name: "PermissionDeniedError" },
            { name: "InternalServerError" },
            { name: "NotFoundError" },
            { name: "NoUpdateDataProvidedError" },
            { name: "IsDeletedError" },
          ],
        },
        { kind: "OBJECT", name: "IsDeletedError", possibleTypes: [] },
        { kind: "OBJECT", name: "AdministrationRights", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "LampsRightsInput", possibleTypes: [] },
        { kind: "SCALAR", name: "ID", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "SimpleProfileInput", possibleTypes: [] },
        { kind: "ENUM", name: "UserType", possibleTypes: [] },
        { kind: "OBJECT", name: "UserGroup", possibleTypes: [] },
        { kind: "OBJECT", name: "ProfilesRights", possibleTypes: [] },
        {
          kind: "INPUT_OBJECT",
          name: "ReferenceBooksRightsInput",
          possibleTypes: [],
        },
        { kind: "INPUT_OBJECT", name: "UpdateRoleInput", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "UsersRightsInput", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "VendorsRightsInput", possibleTypes: [] },
        {
          kind: "UNION",
          name: "AuthResult",
          possibleTypes: [
            { name: "Credentials" },
            { name: "UnauthorizedError" },
            { name: "InternalServerError" },
          ],
        },
        {
          kind: "INPUT_OBJECT",
          name: "CreateUserGroupInput",
          possibleTypes: [],
        },
        { kind: "SCALAR", name: "Timestamp", possibleTypes: [] },
        { kind: "OBJECT", name: "LampsRights", possibleTypes: [] },
        { kind: "OBJECT", name: "ControllersWithDistance", possibleTypes: [] },
        { kind: "OBJECT", name: "Credentials", possibleTypes: [] },
        {
          kind: "INTERFACE",
          name: "Error",
          possibleTypes: [
            { name: "InternalServerError" },
            { name: "UnauthorizedError" },
            { name: "TokenIsExpiredError" },
            { name: "PermissionDeniedError" },
            { name: "AlreadyExistsError" },
            { name: "NotFoundError" },
            { name: "IsDeletedError" },
            { name: "NoUpdateDataProvidedError" },
            { name: "NotSupportedError" },
            { name: "IsInvalidError" },
            { name: "DisconnectedError" },
          ],
        },
        { kind: "ENUM", name: "LampStatus", possibleTypes: [] },
        { kind: "OBJECT", name: "Lamp", possibleTypes: [] },
        { kind: "OBJECT", name: "ControllerWithDistance", possibleTypes: [] },
        { kind: "OBJECT", name: "Controllers", possibleTypes: [] },
        { kind: "OBJECT", name: "SimpleProfile", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "UpdateLampInput", possibleTypes: [] },
        {
          kind: "INPUT_OBJECT",
          name: "AdministrationRightsInput",
          possibleTypes: [],
        },
        {
          kind: "INPUT_OBJECT",
          name: "LampModelsRightsInput",
          possibleTypes: [],
        },
        { kind: "OBJECT", name: "DisconnectedError", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "CreateRoleInput", possibleTypes: [] },
        { kind: "OBJECT", name: "AlreadyExistsError", possibleTypes: [] },
        {
          kind: "INPUT_OBJECT",
          name: "ControllersRightsInput",
          possibleTypes: [],
        },
        {
          kind: "INPUT_OBJECT",
          name: "LampGroupsRightsInput",
          possibleTypes: [],
        },
        {
          kind: "INPUT_OBJECT",
          name: "UpdateUserGroupInput",
          possibleTypes: [],
        },
        { kind: "INPUT_OBJECT", name: "UpdateVendorInput", possibleTypes: [] },
        {
          kind: "INPUT_OBJECT",
          name: "ComplexProfileInput",
          possibleTypes: [],
        },
        {
          kind: "UNION",
          name: "ControllersWithDistanceResult",
          possibleTypes: [
            { name: "ControllersWithDistance" },
            { name: "UnauthorizedError" },
            { name: "TokenIsExpiredError" },
            { name: "PermissionDeniedError" },
            { name: "InternalServerError" },
          ],
        },
        {
          kind: "UNION",
          name: "CreateControllerResult",
          possibleTypes: [
            { name: "Controller" },
            { name: "UnauthorizedError" },
            { name: "TokenIsExpiredError" },
            { name: "PermissionDeniedError" },
            { name: "InternalServerError" },
            { name: "AlreadyExistsError" },
            { name: "IsDeletedError" },
          ],
        },
        { kind: "INPUT_OBJECT", name: "Point", possibleTypes: [] },
        { kind: "OBJECT", name: "ReferenceBooksRights", possibleTypes: [] },
        { kind: "SCALAR", name: "Float", possibleTypes: [] },
        { kind: "OBJECT", name: "TokenIsExpiredError", possibleTypes: [] },
        { kind: "OBJECT", name: "VendorsRights", possibleTypes: [] },
        {
          kind: "UNION",
          name: "ControllersResult",
          possibleTypes: [
            { name: "Controllers" },
            { name: "UnauthorizedError" },
            { name: "TokenIsExpiredError" },
            { name: "PermissionDeniedError" },
            { name: "InternalServerError" },
          ],
        },
        {
          kind: "INPUT_OBJECT",
          name: "ProfilesRightsInput",
          possibleTypes: [],
        },
        { kind: "OBJECT", name: "LampModelsRights", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "AccessRightsInput", possibleTypes: [] },
        { kind: "SCALAR", name: "Boolean", possibleTypes: [] },
        {
          kind: "INPUT_OBJECT",
          name: "CreateControllerInput",
          possibleTypes: [],
        },
        {
          kind: "UNION",
          name: "NestedUserGroupResult",
          possibleTypes: [
            { name: "UserGroup" },
            { name: "InternalServerError" },
            { name: "NotFoundError" },
          ],
        },
        { kind: "OBJECT", name: "Vendor", possibleTypes: [] },
        { kind: "OBJECT", name: "UnauthorizedError", possibleTypes: [] },
        { kind: "OBJECT", name: "NotFoundError", possibleTypes: [] },
        {
          kind: "INPUT_OBJECT",
          name: "CreateLampModelInput",
          possibleTypes: [],
        },
        {
          kind: "UNION",
          name: "RawCommandResult",
          possibleTypes: [
            { name: "Success" },
            { name: "UnauthorizedError" },
            { name: "TokenIsExpiredError" },
            { name: "PermissionDeniedError" },
            { name: "InternalServerError" },
            { name: "NotFoundError" },
            { name: "DisconnectedError" },
            { name: "NotSupportedError" },
            { name: "IsInvalidError" },
            { name: "IsDeletedError" },
          ],
        },
        { kind: "OBJECT", name: "InternalServerError", possibleTypes: [] },
        {
          kind: "OBJECT",
          name: "NoUpdateDataProvidedError",
          possibleTypes: [],
        },
        { kind: "OBJECT", name: "LampModel", possibleTypes: [] },
        {
          kind: "INPUT_OBJECT",
          name: "UpdateLampModelInput",
          possibleTypes: [],
        },
        { kind: "SCALAR", name: "Int", possibleTypes: [] },
        { kind: "OBJECT", name: "ComplexProfile", possibleTypes: [] },
        { kind: "OBJECT", name: "Controller", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "RolesRightsInput", possibleTypes: [] },
        { kind: "OBJECT", name: "LampGroupsRights", possibleTypes: [] },
        { kind: "INPUT_OBJECT", name: "UpdateUserInput", possibleTypes: [] },
      ],
    },
  },
});

export default fm;