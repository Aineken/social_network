import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({field, ...props}) => {

    return <FormControl {...props}>
        <textarea className={styles.form} {...field}/>
    </FormControl>
}

export const Input = ({field, ...props}) => {

    return <FormControl {...props}><input {...field} /></FormControl>
}