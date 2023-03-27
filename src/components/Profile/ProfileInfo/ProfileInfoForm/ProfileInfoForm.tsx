import React, {FC} from 'react';
import {Formik} from "formik";
import {Button, Field, Input, Label, LoginStyled} from "../../../Login/LoginStyled";
import {ProfileType} from "../../../../types/types";



type PropsType = {
    profile : ProfileType
    updateInfo: (values: ProfileType) => void
    setEditInfo: (edit: boolean) => void
}
const ProfileInfoForm: FC<PropsType> = ({profile, updateInfo, setEditInfo}) => {


    return (
        <Formik initialValues={profile}
                onSubmit={async(values, {setSubmitting}) => {
                    setSubmitting(true)
                    await updateInfo(values)
                    setEditInfo(false)


                }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) => <LoginStyled onSubmit={handleSubmit}>
                <Field>
                    <Label>
                        Full name
                    </Label>
                    <Input
                        type="text"
                        name="fullName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName || ""}
                    />
                </Field>
                <Field>
                    <Label>
                        About Me
                    </Label>
                    <Input
                        type="text"
                        name="aboutMe"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.aboutMe || ""}
                    />
                </Field>
                <Field>
                    <Label>
                        Looking for a job
                    </Label>
                    <Input
                        type="checkbox"
                        name="lookingForAJob"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.lookingForAJob}
                    />
                </Field>
                <Field>
                    <Label>
                        Job Description
                    </Label>
                    <Input
                        disabled={!values.lookingForAJob}
                        type="text"
                        name="lookingForAJobDescription"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={!values.lookingForAJob ? "" : values.lookingForAJobDescription}
                    />
                </Field>
                {Object.keys(profile.contacts).map((data) => (
                    <Field key={data}>
                        <Label>
                            {data}
                        </Label>
                        <Input
                            type="text"
                            name={"contacts." + data}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contacts[data] || ""}
                        />
                    </Field>
                ))}
                <Button type="submit" disabled={isSubmitting}>Submit</Button>
            </LoginStyled>
            }
        </Formik>
    );
};

export default ProfileInfoForm;


