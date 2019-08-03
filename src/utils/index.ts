import scss from 'postcss-scss';
import * as postcss from 'postcss';

export function parse(file: string) : postcss.LazyResult {
  return postcss().process(file, {syntax: scss, from: undefined})
}
