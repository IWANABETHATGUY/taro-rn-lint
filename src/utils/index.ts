import scss from 'postcss-scss'
import * as postcss from 'postcss'

export function parse(file: string): postcss.LazyResult {
  return postcss().process(file, { syntax: scss, from: undefined })
}

/**
 * 是否组合选择器
 *
 * @export
 * @param {string} selector
 * @returns {boolean}
 */
export function isCGS(selector: string): boolean {
  return selector.split(',').some(selc => {
    return selc.split(/[\#\.\+\~\>\s]/).filter(Boolean).length > 1
  })
}
