// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#specifications

const formatter = Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

export default function formatMoney(price) {
  return formatter.format(price);
}
