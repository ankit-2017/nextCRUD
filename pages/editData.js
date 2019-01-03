import React, {Component} from 'react'
import Head from '../components/head'
import Link from 'next/link'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from "react-redux";
import * as crudActions from '../Redux/actions'
import {validationSchema} from '../helpers/validation' 


class Edit extends Component{
   static async getInitialProps({store, req, isServer, pathname, query}){
        const id = query.id;
        if(req){
            await store.dispatch(crudActions.getUserData(id))
        }else{
           await store.dispatch(crudActions.getUserData(id))
        }
        return {id}
    }
    render(){
        const {data} = this.props.user_detail
        const initialValues = {
            username: data ? data.username: '',
            Email: data ? data.email: '',
            Name: data ? data.name: ''
          }
        console.log('user data props', this.props.user_detail);
        const id = this.props.id;
        return (
            <div>
                <Head title="Update details" />
                <h3>Update user's details </h3>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit = { async (values, {setSubmitting}) =>{
                    console.log('all values', values);
                    await this.props.dispatch( crudActions.updateUserData(values, id) )
                    await this.props.dispatch(crudActions.getUserData(id));
                    setSubmitting(false)
                }}
                
                render = {({errors, touched, isSubmitting}) =>(
                    <div className="container" >
                    <Form>
                    <div className="form-group" >
                        <label htmlFor="username">Username</label>
                        <Field 
                        name="username"
                        placeholder="Username"
                        type="text"
                        className="form-control"
                        />
                        <ErrorMessage name="username" style={{color: "red"}} component="div" className="field-error" />
                    </div>

                    <div className="form-group" >
                        <label htmlFor="Email">Email</label>
                        <Field 
                        name="Email"
                        placeholder="Email"
                        type="email"
                        className="form-control"
                        />
                        <ErrorMessage name="Email" style={{color: "red"}} component="div" className="field-error" />
                    </div>

                    <div className="form-group" >
                        <label htmlFor="Name">Name</label>
                        <Field 
                        name="Name"
                        placeholder="Your name"
                        type="text"
                        className="form-control"
                        />
                        <ErrorMessage name="Name" style={{color: "red"}} component="div" className="field-error" />
                    </div>


                    <div className="form-group" >
                        <button 
                        className="btn btn-success" 
                        type="submit"
                        disabled={isSubmitting}
                        >Update</button>
                    </div>
                    </Form>
                    </div>
                    
                )}
                />
                <Link href="/">
                    <a>go back</a>
                </Link>
            </div> 
        )
    }
}
function mapStateToProps(state) {
    return {
        user_detail: state.insertData.user_details
    }
}

export default connect(mapStateToProps)(Edit)