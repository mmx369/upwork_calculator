const INTEREST_RATE = 0.08

//calculate with monthly compound friquency, and fix interest rate 8%
function computeSum(sum, lengthOfTime, irr) {
  const result =
    sum / ((((1 + irr / 12) ** (12 * lengthOfTime) - 1) * 12) / irr)
  return Math.round(result)
}

function calculateValue() {
  let sumInputValue = document.querySelector('#sumInput').value || 10000
  let yearInputValue = document.querySelector('#yearsInput').value || 10
  const res = computeSum(
    parseInt(sumInputValue),
    parseInt(yearInputValue),
    INTEREST_RATE
  )
  document.querySelector('#calcResult').textContent = res
  return res
}

const el = document.querySelector('#calcBtn')
el.addEventListener('click', calculateValue)
calculateValue()
