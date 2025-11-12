import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEmployees } from '../context/EmployeeContext';
import DatePicker from '../components/DatePicker';
import Select from '../components/Select';
import { Modal } from '@getsu7/react-simple-modal'
import { states, departments } from '../data/states';
import './CreateEmployee.css';

const CreateEmployee = () => {
  const { addEmployee } = useEmployees();
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee(formData);

    setShowModal(true);

    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: ''
    });
  };

  return (
    <div className="create-employee-page">
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <div className="container">
        <Link to="/employees" className="nav-link">
          Voir les employés actuels
        </Link>

        <h2>Créer un employé</h2>

        <form onSubmit={handleSubmit} className="employee-form">
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date de naissance</label>
            <DatePicker
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Date de début</label>
            <DatePicker
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <fieldset className="address">
            <legend>Adresse</legend>

            <div className="form-group">
              <label htmlFor="street">Rue</label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">État</label>
              <Select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                options={states.map(s => ({ value: s.abbreviation, label: s.name }))}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">Code postal</label>
              <input
                type="number"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="department">Département</label>
            <Select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              options={departments}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Enregistrer
          </button>
        </form>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h3>Employé créé !</h3>
        <p>L'employé a été ajouté avec succès.</p>
      </Modal>
    </div>
  );
};

export default CreateEmployee;

