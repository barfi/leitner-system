/**
 * Represents unique identifier
 *
 * @description String with XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX signature
 * @example
 * const UUID = <UUID>'5b452497-99d2-47a3-8890-f829931ba5ff'
 */
export type UUID = string & { readonly __brand: unique symbol }

// TODO: Add typecasts function `toUUID()`
// TODO: Add type guard function `isUUID()`
// https://javascript.plainenglish.io/writing-robust-typescript-with-branded-primitives-bde7cd2d1c77

/**
 * Represents ISO 8601 date string
 * 
 * @description The same signature as for the new Date().toISOString() output
 * @example
 * new Date().toISOString() // => 2023-10-16T19:08:58.762Z
 */
export type ISO8601 = string & { readonly __brand: unique symbol }

// TODO: Add typecasts function `toISO8601()`
// TODO: Add type guard function `isISO8601()`
// https://javascript.plainenglish.io/writing-robust-typescript-with-branded-primitives-bde7cd2d1c77

/**
 * Represents HEX color string
 * 
 * @description Any valid HEX colors are allowed
 * @example
 * const colors: HEXColor[] = ['#000', '#ffb100', '#ff00001a', '#FFFF00']
 */
export type HEXColor = string & { readonly __brand: unique symbol }

// TODO: Add typecasts function `toHEXColor()`
// TODO: Add type guard function `isHEXColor()`
// https://javascript.plainenglish.io/writing-robust-typescript-with-branded-primitives-bde7cd2d1c77

/**
 * Represents score point
 * 
 * @description Allowed values are from 0 to 1 inclusive
 * @example
 * const score: ScorePoint[] = [0, 0.25, 0.5, 0.75, 1]
 */
export type ScorePoint = number & { readonly __brand: unique symbol }

// TODO: Add typecasts function `ScorePoint()`
// TODO: Add type guard function `ScorePoint()`
// https://javascript.plainenglish.io/writing-robust-typescript-with-branded-primitives-bde7cd2d1c77
