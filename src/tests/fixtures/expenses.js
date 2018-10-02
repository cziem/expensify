import moment from 'moment'

const expenses = [
  {
    id: 1,
    description: "Range Rover",
    note: "Buy Range Rover for mum",
    amount: 842343,
    createdAt: 0
  },
  {
    id: 2,
    description: "Villa Home",
    note: "Build a house in the Villa home",
    amount: 2343,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: 3,
    description: "Domain",
    note: "",
    amount: 943,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
]

export default expenses;