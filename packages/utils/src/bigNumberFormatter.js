/**
 * 格式化大数
 * @param val 
 * @returns 
 */
export function bigNumberFormatter(val){
  let unit='';
  if(typeof val !== 'number' && typeof val !== 'string') return {value: val, unit};
  val = parseInt(val);
  if(val < 1000) return {value: val, unit};
  if(val <= 999994) {
    val = Math.round(val / 10) / 100;
    unit = 'K'
    return { value: val, unit }
  }
  if(val <= 999994999){
    val = Math.round(val / ( 1e6 / 100)) / 100;
    unit = 'M'
    return { value: val, unit }
  }
  val = Math.round(val / (1e9 / 100)) / 100;
  unit = 'B'
  return { value: val, unit }
}