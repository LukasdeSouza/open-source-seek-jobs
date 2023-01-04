import React from 'react'

import { Button, Container, Stack, TextField, Typography } from '@mui/material'

import '../../styles/global.css'

import LoginImg from '../../assets/img-sec-login.svg'
import IconGoogle from '../../assets/icon-google.svg'

const LoginPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        height: 522,
        width: 788,
        boxShadow: "var(--bs-shadow-300)",
        mt: 6
      }}>
      <Stack alignItems={'center'} sx={{ ml: -3, width: 494, backgroundColor: "var(--blue-scale-400)" }}>
        <Typography fontFamily={'Montserrat'} fontSize={22} color={"var(--white-scale-100)"} mt={8}>
          Seek Jobs, todas as <br /> Vagas Tech
        </Typography>
        <img src={LoginImg} alt="" width={250} style={{ marginTop: 32 }} />
      </Stack>
      <Stack alignItems={'center'} mt={8} sx={{ mr: 0, width: 494, backgroundColor: "var(--white-scale-100)" }}>
        <Typography fontFamily={'Montserrat'} fontWeight={700} fontSize={24}>
          Acesse sua Conta
        </Typography>
        <TextField label='Email' size='small' sx={{ width: 320, mt: 4 }} />
        <TextField label='Senha' size='small' sx={{ width: 320, mt: 2 }} />
        <Typography fontFamily={'Montserrat'} fontSize={12} color={"var(--blue-scale-300)"} mt={1}>
          Esqueceu a senha?
        </Typography>
        <Button variant='contained'
          sx={{
            width: 320, backgroundColor: "var(--blue-scale-300)",
            textTransform: "capitalize", fontFamily: "Montserrat", mt: 4

          }}>
          Entrar
        </Button>
        <Typography mt={4}>Ou</Typography>
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={"center"}
          height={36}
          width={320}
          mt={4}
          border={'1px solid black'} borderRadius={4}>
          <img src={IconGoogle} alt="Google Logo" width={24} style={{ marginRight: 16 }} />
          <Typography fontFamily={'Montserrat'} fontSize={12}>
            Continuar com Google
          </Typography>
        </Stack>
        <Typography fontFamily={'Montserrat'} fontSize={12} mt={4}>
          Não tem Login?
          <b style={{ color: "var(--blue-scale-300)" }}> Cadastre-se</b></Typography>
      </Stack>
    </Container >
  )
}

export default LoginPage