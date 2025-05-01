'use client'

import React, { useState, ChangeEvent } from 'react';
import styles from './test.module.css';

//hi there below is my little to-do-list code
// I created this code using React +Next.js anduses useState for State management


export default function test (): JSX.Element {
    // Your Test Starts Here
    //to keep track of the list items

    const [items, setItems] = useState<string[]>([]);
    //keeping track for what's written in the input field
    const [newItem, setNewItem] = useState('');

    //adding new item to the list if it's not empty
    const addItem = () => {
        if (!newItem.trim()) {
            alert('Opps!Please enter something here!;).');
            return;
        }
        setItems([...items, newItem]);
        setNewItem('');
    };
    //Deletes the item by index
    const deleteItem = (index: number) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };
    // Tracking changes in the input field
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewItem(e.target.value);
    };

    return (
        <div className={styles.container}>
            <h2>My To-Do List ;)</h2>
            <div className={styles.inputSection}>
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add a new item..."
                />
                <button onClick={addItem}>Add</button>
            </div>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                        {item}
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};
