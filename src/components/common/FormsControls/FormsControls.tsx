import React, {FC} from "react";
import styles from "./FormsControls.module.css";

type FormControlPropsType = {
    meta: {
        touched: boolean,
        error: string,
    }
    children: React.ReactNode,
}

const FormControl:FC<FormControlPropsType> = ({meta, ...props}) => {
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

type TextareaPropsType = {
    field: {
        onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
        onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void,
        value: string,
        name: string,
    }
}
export const Textarea:FC<TextareaPropsType> = ({field, ...props}) => {

    return <FormControl {...props}>
        <textarea className={styles.form} {...field}/>
    </FormControl>
}

type InputPropsType = {
    field: {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
        onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
        value: string,
        name: string,
    }
}
export const Input:FC<InputPropsType> = ({field, ...props}) => {

    return <FormControl {...props}><input {...field} /></FormControl>
}