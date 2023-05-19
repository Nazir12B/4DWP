export default function filterfunc(filter) {
    return function (blason) {
      return (
        blason.name.common.toLowerCase().includes(filter.toLowerCase()) 
      )
    }
  }