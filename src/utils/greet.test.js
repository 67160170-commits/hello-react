import { describe, expect, test } from 'vitest'
import { greet } from './greet.js'

describe('greet', () => {
  test('ทักทายตามชื่อ', () => {
    expect(greet('นิสิต')).toBe('สวัสดี นิสิต')
  })
})
