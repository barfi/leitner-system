/**
 * Represents unique identifier
 *
 * @description String with XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX signature
 * @example
 * const UUID = <UUID>'5b452497-99d2-47a3-8890-f829931ba5ff'
 */
export type UUID = string & { __kind: 'UUID' }

/**
 * Represents ISO 8601 date string
 * 
 * @description The same signature as for the new Date().toISOString() output
 * @example
 * new Date().toISOString() // => 2023-10-16T19:08:58.762Z
 */
export type ISO8601 = string & { __kind: 'ISO8601' }

/**
 * Represents HEX color string
 * 
 * @description Any valid HEX colors are allowed
 * @example
 * const colors: HEXColor[] = ['#000', '#ffb100', '#ff00001a', '#FFFF00']
 */
export type HEXColor = string & { __kind: 'Hex color' }

/**
 * Represents score point
 * 
 * @description Allowed values are from 0 to 1 inclusive
 * @example
 * const score: ScorePoint[] = [0, 0.25, 0.5, 0.75, 1]
 */
export type ScorePoint = number & { __kind: 'Score point' }

