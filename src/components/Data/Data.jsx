import React, { Component } from "react";
import DataTable from "react-data-table-component";

import Nav from '../Nav/Nav';
//import data from '../../context/data';

// Data for table
const dataInfo = [
  {
      id: 1,
      Title: 'Beetlejuice',
      Content: '1988',
      Language: 'ES'
  },
  {
      id: 2,
      Title: 'Ghostbusters',
      Content: '1984',
      Language: 'ES'
  },
]

// Filtrar dentro de data por article 

const columns = [
  {
    id: 1,
    name: "Title",
    selector: (row) => row.Title,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Content",
    selector: (row) => row.Content,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "Language",
    selector: (row) => row.Language,
    right: true,
    reorder: true
  },
  {
    id: 4,
    name: "Tags",
    selector: (row) => row.Tags,
    right: true,
    reorder: true
  }
];

class Data extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <section>
        <Nav />
        <div className="table">
          <DataTable
            title="Articles"
            columns={columns}
            data={dataInfo}
            defaultSortFieldId={1}
            pagination
          />
        </div>
      </section>

    )
  }
}

export default Data;


