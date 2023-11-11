import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Form() {
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Category</option>
                    <option value="salary">Salary</option>
                    {/* TODO: Add more income options */}
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#000000'}
                />
            </div>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        border: 2px solid #000000;
        padding: .5rem 1rem;
        resize: none;
        color: #000;

        &::placeholder {
            color: #aaa;
        }
    }

    .input-control {
        input {
            width: 100%;
        }
    }

    .selects {
        display: flex;
        justify-content: flex-end;
        select {
            color: #000;
            &:focus, &:active {
                color: #000;
            }
        }
    }

    .submit-btn {
        button {
            background: #fff;
            color: #000;
            &:hover {
                background: #eee;
            }
        }
    }
`;

export default Form