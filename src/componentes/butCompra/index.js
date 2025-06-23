
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './sytle.js';
import React from 'react';

export default function Comprabutton() {



    return (
        <button
            type="button"
            style={styles.cartButton}
        >
            <AiOutlineShoppingCart />
            <span style={styles.butquant}>1</span>
        </button>
    );
}
