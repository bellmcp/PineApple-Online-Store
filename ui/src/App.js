import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'store/configureStore'
import Layout from 'modules/ui/components/Layout'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout></Layout>
      </Router>
    </Provider>
  )
}

// import React from 'react'
// import { useForm } from 'react-hook-form'
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'

// export default function App() {
//   const { register, handleSubmit, errors } = useForm({
//     mode: 'onBlur',
//     defaultValues: {
//       gender: 'Male',
//     },
//     resolver: yupResolver(
//       yup.object().shape({
//         email: yup.string().required(),
//         password: yup.string().min(8).required(),
//         gender: yup.mixed().oneOf(['Male', 'Female']),
//       })
//     ),
//   })

//   const submit = (value) => {
//     console.log(value)
//   }

//   return (
//     <form onSubmit={handleSubmit(submit)}>
//       <input type="text" name="email" ref={register} />
//       {errors.email && <div>{errors.email.message}</div>}
//       <input type="password" name="password" ref={register} />
//       {errors.password && <div>{errors.password.message}</div>}
//       <input type="text" name="gender" ref={register} />
//       {errors.gender && <div>{errors.gender.message}</div>}
//       <button type="submit">Submit</button>
//     </form>
//   )
// }
