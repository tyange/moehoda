export interface Permissions {
  admin: boolean;
  pull: boolean;
  push: boolean;
  triage?: boolean;
  maintain?: boolean;
}
