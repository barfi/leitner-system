import type { ISO8601, ScorePoint } from '../shared/BrandedPrimitives'
import { type BaseEntity, baseEntityKeys } from './BaseEntity'

/**
 * Represents card entity stored in the database
 */
export type CardEntity = BaseEntity & {

  /**
   * Question
   */
  readonly question: string

  /**
   * Answer
   */
  readonly answer: string

  /**
   * External resource url
   */
  readonly url: string | null

  /**
   * Scores
   */
  readonly scores: ReadonlyArray<ScorePoint>

  /**
   * Scheduled date
   */
  readonly scheduledAt: ISO8601

}

/**
 * Card entity keys
 */
export const cardEntityKeys: ReadonlyArray<keyof CardEntity> = [
  ...baseEntityKeys,
  'question',
  'answer',
  'url',
  'scores',
  'scheduledAt'
]
