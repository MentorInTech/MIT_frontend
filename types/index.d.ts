import * as React from 'react';

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

/* Page component */
export interface PageProps {
  title: string,
  children: any
}
