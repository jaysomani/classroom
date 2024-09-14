import React, { useEffect, useState } from 'react';
import { getClasses } from '../services/api';

const ClassroomList = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const data = await getClasses();
            setClasses(data);
        };
        fetchClasses();
    }, []);

    return (
        <div>
            <h2>Classrooms</h2>
            <ul>
                {classes.map(classroom => (
                    <li key={classroom._id}>{classroom.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClassroomList;
