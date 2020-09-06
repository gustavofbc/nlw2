import React, {useState, FormEvent}  from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import backgroundPerfil from '../../assets/images/background-perfil.svg';
import warningIcon from '../../assets/images/icons/warning.svg';
import rocketIcon from '../../assets/images/icons/rocket.svg';

import './styles.css';
import api from '../../services/api';

function EditTeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, //método que copia o array
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function removeScheduleItem() {
        let copyArray = [...scheduleItems]
        copyArray.pop()
        setScheduleItems(copyArray)
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });
        
        setScheduleItems(updatedScheduleItems);
    }

    function handleUpdateClass(e: FormEvent ) {
        e.preventDefault();

        api.post('classes', {
            name,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then( () => {
            // alert('Cadastro realizado com sucesso');
            
            history.push('/classes-updated-notification');
        }).catch( () => {
            alert('Erro na atualização dos dados')
            })

    }

    return (
        <div id="page-class-edit-form" className="container">
            <PageHeader 
                pageTitle='Meu perfil'
                returnTo="/list-classes"
            >
            
            <img className="background-img" src={backgroundPerfil} alt=""/>
            
            <div className="perfil-content">
                <img className="img-perfil" src="https://avatars3.githubusercontent.com/u/40838230?s=460&u=c07951c74add98296f80181d8cacaa6c698154e3&v=4" alt=""/>
                <strong className="name-proffy">Proffy teste</strong>
                <p className="name-materia">matéria</p>
            </div>
            </PageHeader>

            <main>
                <form onSubmit={handleUpdateClass}>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input 
                        name="whatsapp" 
                        label="Whatsapp"
                        placeholder="(  ) _ ____-____"
                        value={whatsapp}
                        onChange={(e) => {setWhatsapp(e.target.value)} }
                    />

                    <Textarea 
                        name="bio" 
                        label="Biografia"
                        maxLength={300}
                        textComplement={`(Máximo de 300 caracteres)`}
                        value={bio}
                        onChange={(e) => {setBio(e.target.value)} }
                    />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <div className="fieldsetHeader">
                    
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciêcias', label: 'Ciêcias'},
                            {value: 'Educação física', label: 'Educação física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'História', label: 'História'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Química', label: 'Química'}
                        ]}
                    />
                    <Input 
                        name="cost"
                        placeholder="R$"
                        label="Custo da sua hora por aula"
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}    
                    />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                    </legend>

                    {scheduleItems.map( (scheduleItem, index) => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana"
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options={[
                                        {value: '0', label: 'Domingo'},
                                        {value: '1', label: 'Segunda-feira'},
                                        {value: '2', label: 'Terça-feira'},
                                        {value: '3', label: 'Quarta-feira'},
                                        {value: '4', label: 'Quinta-feira'},
                                        {value: '5', label: 'Sexta-feira'},
                                        {value: '6', label: 'Sábado'},
                                    ]}
                                />
                                <Input 
                                    name="from" 
                                    label="Das" 
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />

                                <Input 
                                    name="to" 
                                    label="Até" 
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />

                                <button className="button-remove" type="button" onClick={removeScheduleItem}>Excluir horário</button>
                            </div>
                        );
                    })
                }
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Certifque-se da conformidade <br />
                        dos dados preenchidos acima
                    </p>
                    <button type="submit">
                        Salvar alterações
                    </button>
                </footer>
                </form>
            </main>
        </div>
    );
}

export default EditTeacherForm;