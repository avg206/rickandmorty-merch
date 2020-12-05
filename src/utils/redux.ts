import { AnyAction, PayloadAction, SerializedError } from '@reduxjs/toolkit';

export const actionTypeEndsWith = (sliceName: string, ending: string) => (
  action: AnyAction
): action is PayloadAction<unknown, string, unknown, SerializedError> =>
  action.type?.startsWith(sliceName) && action.type?.endsWith(ending);
