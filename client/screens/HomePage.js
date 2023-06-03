// Importação de bibliotecas e componentes
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// Componente HomePage
const HomePage = () => {
  // Estados
  const [heartColor1, setHeartColor1] = useState('#FDFDFD'); // Estado para a cor do coração 1
  const [heartColor2, setHeartColor2] = useState('#FDFDFD'); // Estado para a cor do coração 2
  const [heartColor3, setHeartColor3] = useState('#FDFDFD');
  const [menuVisible, setMenuVisible] = useState(false); // Estado para a visibilidade do menu

  // Função para lidar com o pressionar do coração 1
  const handleHeartPress1 = () => {
    const newColor = heartColor1 === '#FDFDFD' ? 'red' : '#FDFDFD'; // Altera a cor do coração 1 com base no estado atual
    setHeartColor1(newColor); // Atualiza o estado da cor do coração 1
  };

  // Função para lidar com o pressionar do coração 2
  const handleHeartPress2 = () => {
    const newColor = heartColor2 === '#FDFDFD' ? 'red' : '#FDFDFD'; // Altera a cor do coração 2 com base no estado atual
    setHeartColor2(newColor); // Atualiza o estado da cor do coração 2
  };

  const handleHeartPress3 = () => {
    const newColor = heartColor3 === '#FDFDFD' ? 'red' : '#FDFDFD'; // Altera a cor do coração 2 com base no estado atual
    setHeartColor3(newColor); // Atualiza o estado da cor do coração 2
  };

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Inverte o estado de visibilidade do menu
  };

  // Renderização do componente
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Home</Text>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={24} color="#FFA500" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {menuVisible && (
        <View style={styles.menu}>
          {/* Aqui você pode adicionar os itens do menu */}
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="user-circle-o" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Dados pessoais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="ios-document-text-outline" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Planos/Serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="folder-outline" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Termos e Documentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <AntDesign name="warning" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Bloqueios e pendências</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="notifications" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Notificações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <AntDesign name="addusergroup" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Convide seus amigos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons name="payment" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Carteira</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="coins" size={18} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Histórico de Pagamentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <AntDesign name="shoppingcart" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="gear" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <AntDesign name="arrowleft" size={22} color="#FDFDFD" />
            <Text style={styles.menuItemText}>Sair do App</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.scrollView}> 
      <Text style={styles.title}>Bem-vindo à Academia Fitnesis</Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="time-outline" size={24} color="#FFF" style={styles.cardIcon} />
          <Text style={styles.titlecard}>Funcionamento Reduzido</Text>
        </View>
        <Text style={styles.cardText}>
          Dia 01/05 é feriado, Dia do trabalhador. Devido a isso, a unidade funcionará em horário reduzido nesse dia. Agradecemos a compreensão!
        </Text>
        <TouchableOpacity onPress={handleHeartPress1}>
        <AntDesign name="heart" size={24} color={heartColor1} />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="megaphone-outline" size={24} color="#FFF" style={styles.cardIcon} />
          <Text style={styles.titlecard}>Cupom de Promoção 10% Off</Text>
        </View>
        <Text style={styles.cardText}>
          Não perca apenas essa semana para assinantes Fitnesis, Creatina com 10% de desconto, clique aqui para saber mais e resgatar seu cupom.
        </Text>
        <TouchableOpacity onPress={handleHeartPress2}>
        <AntDesign name="heart" size={24} color={heartColor2} />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="time-outline" size={24} color="#FFF" style={styles.cardIcon} />
          <Text style={styles.titlecard}>Funcionamento Reduzido</Text>
        </View>
        <Text style={styles.cardText}>
          Dia 01/05 é feriado, Dia do trabalhador. Devido a isso, a unidade funcionará em horário reduzido nesse dia. Agradecemos a compreensão!
        </Text>
        <TouchableOpacity onPress={handleHeartPress3}>
        <AntDesign name="heart" size={24} color={heartColor3} />
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 1,
    paddingTop: 0,
    backgroundColor: '#262626',
    width: '100%',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#050505',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  
  navbarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA500',
    textTransform: 'uppercase',
  },
  icon: {
    marginRight: 10,
  },
  menu: {
    position: 'absolute',
    top: 70,
    left: 0, // Alterado para "left"
    backgroundColor: '#050505',
    borderRadius: 8,
    padding: 20,
    elevation: 2,
    zIndex: 999,
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    color: '#FDFDFD',
    paddingVertical: 10,
    borderBottomWidth: 1,  // Adiciona uma linha na parte inferior
    borderBottomColor: '#222222',  // Define a cor da linha
  },
  menuItemText: { // Adicionado o estilo para o texto do menu
    marginLeft: 10, // Adicionado margem à esquerda para separar o texto do ícone
    color: '#FDFDFD',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'left',
    color: '#FFA500',
    paddingTop: 40,
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 2,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '98%',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardIcon: {
    marginRight: 10,
  },
  titlecard: {
    textTransform: 'uppercase',
    fontSize: 20,
    marginBottom: 1,
    color: '#F5F5F5',
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#F5F5F5',
    paddingTop: 15,
  },
});

export default HomePage; // Exporta o componente HomePage como padrão
