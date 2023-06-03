import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const PerfilPage = () => {
  const perfilCliente = {
    nome: 'Carlos Cabral',
    id: 'ID 724617',
    idade: 20,
    endereco: 'Oasis Springs Rua Rattlesnake Juice 212',
    telefone: '(81) 986835312',
    descricao: 'Uma breve descrição sobre o cliente...',
    interesses: ['Yoga', 'Meditação', 'Aeróbica'],
    historico: [
      { data: '01/01/2022', acao: 'Ritmos 12:00 - 12:45 concluido' },
      { data: '15/02/2022', acao: 'Treino concluido ' },
      { data: '05/03/2022', acao: 'Yoga 16:00 - 17:00 concluido ' },
    ],
  };
  const [menuVisible, setMenuVisible] = useState(false); // Estado para a visibilidade do menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Inverte o estado de visibilidade do menu
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Perfil</Text>
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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Text style={styles.name}>{perfilCliente.nome}</Text>
          <Text style={styles.id}>{perfilCliente.id}</Text>
          <Text style={styles.age}>{perfilCliente.idade} anos</Text>

          <View style={styles.infoContainer}>
            <Ionicons name="location-outline" size={24} color="#FFA500" style={styles.infoIcon} />
            <Text style={styles.infoText}>{perfilCliente.endereco}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Ionicons name="call-outline" size={24} color="#FFA500" style={styles.infoIcon} />
            <Text style={styles.infoText}>{perfilCliente.telefone}</Text>
          </View>

          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.description}>{perfilCliente.descricao}</Text>

          <Text style={styles.sectionTitle}>Interesses</Text>
          <View style={styles.interestsContainer}>
            {perfilCliente.interesses.map((interesse, index) => (
              <View key={index} style={styles.interestItem}>
                <Text style={styles.interestText}>{interesse}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Histórico</Text>
          {perfilCliente.historico.map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <Text style={styles.historyDate}>{item.data}</Text>
              <Text style={styles.historyAction}>{item.acao}</Text>
            </View>
          ))}
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
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  profileContainer: {
    alignItems: 'flex-start',
    paddingHorizontal:30,
  },
  name: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#F5F5F5',
  },
  id: {
    fontSize: 16,
    color: '#FFA500',
    marginBottom: 12,

  },
  age: {
    fontSize: 16,
    color: '#FFA500',
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    color: '#777',
    textAlign: 'center',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  interestItem: {
    backgroundColor: '#FFA500',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 5,
  },
  interestText: {
    fontSize: 14,
    color: '#FFF',
  },
  historyItem: {
    backgroundColor: '#1C1C1C',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '98%',
  },
  historyDate: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#CCCCCC',
  },
  historyAction: {
    fontSize: 14,
    color: '#CCCCCC',
  },
});

export default PerfilPage;
