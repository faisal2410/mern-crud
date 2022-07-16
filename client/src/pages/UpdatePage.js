import React from 'react';
import UpdateForm from '../components/Update/UpdateForm';
import { useParams } from 'react-router-dom';

const UpdatePage = () => {
    const { id } = useParams();
    return (
        <div>
            <UpdateForm id={id}></UpdateForm>
        </div>
    );
};

export default UpdatePage;