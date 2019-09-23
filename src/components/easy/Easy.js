import React from 'react';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';

class Easy extends React.Component{
  constructor(){
    super();
    this.state = {
      nome: "",
      telefone: ""
    };
    this.onChange = (evento) => {
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;
      state[campo] = evento.target.value;
      this.setState(state);
    };
    this.juntar = () => {
      const link = "https://api.whatsapp.com/send?phone=55";
      const nomeDestinatario = this.state.nome;      
      const telefoneFinal = this.state.telefone;
      const frase = "&text=Ol%C3%A1 " + nomeDestinatario + ", estou%20enviando%20esta%20mensagem%20para%20mantermos%20contato%20via%20WhatsApp";
      const sendWhats = link + telefoneFinal + frase;
      window.location = sendWhats;
    }
  }
  render(){
    return(
      <Container maxWidth="sm">
        <div className="gridFun">
          <div className="boxData">
            <h1 className="logo"><Icon className="iconContact">contacts</Icon> Easy Contact WhatsApp</h1> 
            <p className="textoExplicativo">Informe o nome e telefone do contato para enviar um EasyWhats repidinho.</p>
            <div className="form">
              <input className="textClass" type="text" value={this.state.nome} onChange={this.onChange} name="nome" id="nomeId" placeholder="Nome do Contato" />
              <input className="telefoneClass" value={this.state.telefone} onChange={this.onChange} type="number" name="telefone" id="telefoneId" placeholder="Insira o Número de Telefone" />
              <button onClick={this.juntar}>Enviar <Icon className="iconSend">send</Icon></button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Easy;