import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { useEmployees } from '../context/EmployeeContext';
import './EmployeeList.css';

const EmployeeList = () => {
  const { employees  } = useEmployees();

  const columns = [
    {
      name: 'Prénom',
      selector: row => row.firstName,
      sortable: true,
      grow: 1,
    },
    {
      name: 'Nom',
      selector: row => row.lastName,
      sortable: true,
      grow: 1,
    },
    {
      name: 'Date de début',
      selector: row => row.startDate,
      sortable: true,
      grow: 1,
    },
    {
      name: 'Département',
      selector: row => row.department,
      sortable: true,
      grow: 1,
    },
    {
      name: 'Date de naissance',
      selector: row => row.dateOfBirth,
      sortable: true,
      grow: 1,
    },
    {
      name: 'Rue',
      selector: row => row.street,
      sortable: true,
      grow: 1.5,
    },
    {
      name: 'Ville',
      selector: row => row.city,
      sortable: true,
      grow: 1,
    },
    {
      name: 'État',
      selector: row => row.state,
      sortable: true,
      grow: 0.5,
    },
    {
      name: 'Code postal',
      selector: row => row.zipCode,
      sortable: true,
      grow: 0.8,
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#5c8f5c',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1rem',
      },
    },
    headCells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    rows: {
      style: {
        fontSize: '0.95rem',
        '&:hover': {
          backgroundColor: '#f5f5f5',
          cursor: 'pointer',
        },
      },
      stripedStyle: {
        backgroundColor: '#fafafa',
      },
    },
    pagination: {
      style: {
        borderTop: '1px solid #e0e0e0',
        fontSize: '0.9rem',
      },
    },
  };

  const paginationComponentOptions = {
    rowsPerPageText: 'Lignes par page:',
    rangeSeparatorText: 'de',
    noRowsPerPage: false,
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Tous',
  };

  return (
    <div className="employee-list-page">
      <div className="container">
        <h1>Employés actuels</h1>

        <div className="table-container">
          <DataTable
            columns={columns}
            data={employees}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            highlightOnHover
            striped
            responsive
            customStyles={customStyles}
            noDataComponent={
              <div className="no-data">
                <p>Aucun employé enregistré</p>
                <Link to="/" className="add-employee-link">
                  Ajouter un employé
                </Link>
              </div>
            }
          />
        </div>

        <Link to="/" className="home-link">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default EmployeeList;

