import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ClassesItem, {Teacher} from '../../components/ClassesItem';
import api from '../../services/api';

import clipboardIcon from '../../assets/images/icons/clipboard.svg'

import "./styles.css";

function ClassesList() {
    const [teachers, setTeachers] = useState([]);
    //ID que devo pegar e setar aqui é o do usuário logado
    const user_id = '1';

    useEffect( () => {
        async function searchClasses() {

            const response = await api.get('classesAll', {
                params: {user_id}
            });

            setTeachers(response.data);
        }
    
        searchClasses();
    
    }, []);

    return (
        <div id="page-list-classes" className="container">
            <PageHeader 
                title='Essas são suas classes, Proffy.'
                pageTitle='Suas Classes'
                img={clipboardIcon}
                subtext="Check!"
            >
            </PageHeader>

            <main>
                {teachers.map( (teacher: Teacher) => {
                    return <ClassesItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default ClassesList;