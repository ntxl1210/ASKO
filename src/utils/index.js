import boy from '../assets/boy.png';
import girl from '../assets/girl-16.png';

export const data = [
  {
    name: 'Brooklyn Simmons',
    id: '87364523',
    email: 'brooklyns@mail.com',
    phoneNumber: '(603) 555-0123',
    dateAdded: '21/12/2022',
    timeAdded: '10:40 PM',
    status: 'approved',
    gender: 'male',
    cn: 'sdjkfnjksdf sdjnkjsndf',
  },
  {
    name: 'Brooklyn Simmons',
    id: '34857893',
    email: 'brooklyns@mail.com',
    phoneNumber: '(603) 555-0123',
    dateAdded: '22/12/2022',
    timeAdded: '5:20 PM',
    gender: 'female',
    status: 'declined',
    cn: 'sdjkfnjksdf sdjnkjsndf',
  },
  {
    name: 'Brooklyn Simmons',
    id: '87364523',
    email: 'brooklyns@mail.com',
    phoneNumber: '(603) 555-0123',
    dateAdded: '21/12/2022',
    timeAdded: '10:40 PM',
    gender: 'male',
    status: 'approved',
    cn: 'sdjkfnjksdf sdjnkjsndf',
  },
  {
    name: 'Brooklyn Simmons',
    id: '87364523',
    email: 'brooklyns@mail.com',
    phoneNumber: '(603) 555-0123',
    dateAdded: '21/12/2022',
    timeAdded: '10:40 PM',
    gender: 'female',
    status: 'approved',
    cn: 'sdjkfnjksdf sdjnkjsndf',
  },
  {
    name: 'Brooklyn Simmons',
    id: '87364523',
    email: 'brooklyns@mail.com',
    phoneNumber: '(603) 555-0123',
    dateAdded: '21/12/2022',
    timeAdded: '10:40 PM',
    status: 'approved',
    cn: 'sdjkfnjksdf sdjnkjsndf',
  },
  {
    name: 'Brooklyn Simmons',
    id: '87364523',
    email: 'brooklyns@mail.com',
    phoneNumber: '(603) 555-0123',
    dateAdded: '21/12/2022',
    timeAdded: '10:40 PM',
    gender: 'male',
    status: 'declined',
    cn: 'sdjkfnjksdf sdjnkjsndf',
  },
  {
    name: 'Brooklyn Simmons',
    id: '87364523',
    email: 'brooklyns@mail.com',
    phoneNumber: '(603) 555-0123',
    dateAdded: '21/12/2022',
    timeAdded: '10:40 PM',
    gender: 'female',
    status: 'approved',
    cn: 'sdjkfnjksdf sdjnkjsndf',
  },
  {
    name: 'Brooklyn Simmons',
    id: '87364523',
    email: 'brooklyns@mail.com',
    phoneNumber: '(603) 555-0123',
    dateAdded: '21/12/2022',
    timeAdded: '10:40 PM',
    gender: 'male',
    status: 'approved',
    cn: 'sdjkfnjksdf sdjnkjsndf',
  },
];

export const columns = [
  {
    key: 'name',
    title: 'Name',
    width: 300,
    render: (_, { name, gender, cn }) => (
      <div className="table-cell-info-container">
        <img src={gender === 'male' ? boy : girl} alt={gender} />
        <div className="table-cell-info-subcontainer">
          <span className="table-cell-info-name">{name}</span>
          <span className="table-cell-info-cn">{cn} </span>
        </div>
      </div>
    ),
  },
  {
    key: 'id',
    title: 'ID',
    width: 50,
  },
  {
    key: 'email',
    title: 'Email',
    width: 300,
  },
  {
    key: 'phoneNumber',
    title: 'Phone Number',
    width: 300,
  },
  {
    key: 'dateAdded',
    title: 'Date added',
    width: 200,
  },
  {
    key: 'status',
    title: 'Status',
    width: 100,
    render: (_, { status }) => <span>{status}</span>,
  },
  {
    key: 'action',
    title: '',
    width: 50,
    render: (_, item) => (
      <>
        <button>-></button>
      </>
    ),
  },
];

export const navbar = ['Users', 'Patients', 'Hospitals', 'Notice'];

export const subHeader = ['Doctors', 'Adminstration', 'Accounts', 'more'];
