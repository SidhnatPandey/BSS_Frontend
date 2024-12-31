declare module 'shapefile' {
    export function parseZip(buffer: ArrayBuffer): Promise<any>;
  
    export interface GeoJSON {
      type: string;
      features: Feature[];
    }
  
    export interface Feature {
      type: string;
      geometry: Geometry;
      properties: any;
    }
  
    export interface Geometry {
      type: string;
      coordinates: any;
    }

  export function open(file: any, dbfFilePath: string) {
    throw new Error('Function not implemented.');
  }
  }
  