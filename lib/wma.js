module.exports = function wma (s, key, length, source_key) {
    if (!source_key) source_key = 'close'
    if (s.lookback.length >= length) {
        let weight = length
        let wma = s.lookback.slice(0,length).reduce((sum, cur)  => {
            let value = cur[source_key] * weight
            weight--
            length = length + weight
            return sum + value
        },0);

      s.period[key] = wma / length
    }
  }
  
  