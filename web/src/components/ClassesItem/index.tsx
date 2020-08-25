import React from 'react'

import bookEditIcon from '../../assets/images/icons/book-edit.svg';

import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const ClassesItem: React.FC<TeacherItemProps> = ({teacher}) => {
    
    return(
        <article className="classes-item">
            <header>
                
                <div>
                    <img src={teacher.avatar} alt={teacher.name}/>
                    <div className="classes-item-content">
                        <strong>{teacher.subject}</strong>
                        <span>{teacher.name}</span>
                    </div>
                </div>

                <Link to='/home' className='classes-button'>
                    <img src={bookEditIcon} alt="BookEdit"/>
                </Link>
            </header>

            <p>
                {teacher.bio} 
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ {teacher.cost}</strong> 
                </p>

            </footer>
        </article>
    );
}

export default ClassesItem;