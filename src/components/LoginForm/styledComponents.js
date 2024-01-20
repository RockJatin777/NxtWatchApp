import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 30px;
  width: 350px;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto';
`

export const LoginLog = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 16px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 16px;
`

export const InputLabel = styled.label`
  font-size: 12px;
  color: #475569;
`

export const UserInput = styled.input`
  font-size: 16px;
  color: #475569;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 6px;
  outline: none;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 6px;
  height: 30px;
  margin-top: 20px;
  color: #ffffff;
`

export const SubmitError = styled.p`
  font-size: 12px;
  color: #ff0b37;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin 12px;
`

export const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`

export const ShowPassword = styled.label`
  color: #1e293b;
`
