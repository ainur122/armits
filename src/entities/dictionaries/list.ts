import { CancelablePromise } from 'restApi/core/CancelablePromise';

export enum EDictionaryKeys {
  LicenseTypes = 'LicenseTypes',
  BusinessEntities = 'BusinessEntities',
  BusinessAssetTypes = 'BusinessAssetTypes',
  Documents = 'Documents',
  Areas = 'Areas',
  AreaTypes = 'AreaTypes',
  LicenseAreas = 'LicenseAreas',
  StrataUnits = 'StrataUnits',
  StrataUnitTypes = 'StrataUnitTypes',
  MiningLeases = 'MiningLeases',
  Targets = 'Targets',
  TargetProperties = 'TargetProperties',
}

export type IDictionaryItem = {
  [key: string]: () => CancelablePromise<unknown[]>;
};

export const dictionariesLoaderList: IDictionaryItem = {

};
