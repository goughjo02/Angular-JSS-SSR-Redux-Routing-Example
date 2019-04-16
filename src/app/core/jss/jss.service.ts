import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TypographyConfig,
  createMaterialCoreStyles,
  Palette,
  matPalette,
  Theme,
  matLightTheme,
  createMaterialThemeStyles
} from 'jss-angular-material';
import materialpalette from 'material-palette'; // ES2015
// var Color = require('color');
import Color from 'color';

const primaryPalette: Palette = {
  50: '#E3F2FD',
  100: '#BBDEFB',
  200: '#90CAF9',
  300: '#64B5F6',
  400: '#42A5F5',
  500: '#2196F3',
  600: '#1E88E5',
  700: '#1976D2',
  800: '#1565C0',
  900: '#0D47A1',
  contrast: {
    50: '#000',
    100: '#000',
    200: '#000',
    300: '#000',
    400: '#000',
    500: '#000',
    600: '#000',
    700: '#000',
    800: '#000',
    900: '#000'
  }
};

const whiteContrast = {
  50: '#fff',
  100: '#fff',
  200: '#fff',
  300: '#fff',
  400: '#fff',
  500: '#fff',
  600: '#fff',
  700: '#fff',
  800: '#fff',
  900: '#fff'
}

const accentPalette: Palette = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#EEEEEE',
  300: '#E0E0E0',
  400: '#BDBDBD',
  500: '#9E9E9E',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  contrast: whiteContrast
};

const warnPalette: Palette = {
  50: '#FFEBEE',
  100: '#FFCDD2',
  200: '#EF9A9A',
  300: '#E57373',
  400: '#EF5350',
  500: '#F44336',
  600: '#E53935',
  700: '#D32F2F',
  800: '#C62828',
  900: '#B71C1C',
  contrast: {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#F44336',
    600: '#E53935',
    700: '#D32F2F',
    800: '#C62828',
    900: '#B71C1C'
  }
};

@Injectable({
  providedIn: 'root'
})
export class JssService {
  changed = false;
  constructor() {
    const typographyConfig: TypographyConfig = null; // use the default typography config
    const coreOverrides: object = {}; // do not override any core styles (optional parameter)
    const dynamicCoreStyles = true; // static core styles

    // create Angular Material core css from provided config and attach it to the head of document
    createMaterialCoreStyles(typographyConfig, coreOverrides, dynamicCoreStyles).attach();

    // https://material.io/guidelines/style/color.html#color-color-palette
    const primary: Palette = matPalette(primaryPalette, 500, 100, 900);
    const accent: Palette = matPalette(accentPalette, 500, 100, 900);
    const warn: Palette = matPalette(warnPalette, 500, 100, 900);

    const theme: Theme = matLightTheme(primary, accent, warn);

    const stream$ = Observable.create(observer => observer.next('red'));

    // Angular Material styles to override.
    const themeOverrides: object = {
      '.mat-snack-bar-container': stream$,
      '.mat-toolbar': {
        background: 'green'
      }
    };

    // to support rxjs observables, styles have to be dynamic
    const dynamicThemeStyles: boolean = true;

    // create Angular Material theme css from provided config and attach it to the head of document
    createMaterialThemeStyles(theme, themeOverrides, dynamicThemeStyles).attach();
  }
  changeTheme(color: any): void {
    // https://material.io/guidelines/style/color.html#color-color-palette
    const primary: Palette = matPalette(primaryPalette, 500, 100, 900);
    const accent: Palette = matPalette(accentPalette, 500, 100, 900);
    const warn: Palette = matPalette(warnPalette, 500, 100, 900);
    const split = color.split(',');
    const result = {
      h: parseInt(split[0].substr(4), 10),
      s: parseInt(split[1].slice(0, -1), 10),
      l: parseInt(split[2].slice(0, -2), 10)
    }
    console.log(result)
    const ciao = materialpalette(result);
    console.log(ciao)
    // console.log(ciao)
    // console.log(primary)
    for (var key in ciao) {
      // console.log(ciao[key]);
      var color = Color(ciao[key])
      // console.log(color.hex())
      ciao[key] = color.hex();
    }
    ciao.contrast = whiteContrast
    console.log(primary)
    const newPallette = matPalette(ciao, 500, 100, 900);
    const theme: Theme = matLightTheme(newPallette, newPallette, warn);
    const stream$ = Observable.create(observer => observer.next('red'));

    // Angular Material styles to override.
    const themeOverrides: object = {
      '.mat-snack-bar-container': stream$,
      '.mat-toolbar': {
        background: 'green'
      }
    };

    // to support rxjs observables, styles have to be dynamic
    const dynamicThemeStyles: boolean = true;

    // create Angular Material theme css from provided config and attach it to the head of document
    createMaterialThemeStyles(theme, themeOverrides, dynamicThemeStyles).attach();
  }
}
