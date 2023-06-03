import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const AgendaPage = () => {
  const [menuVisible, setMenuVisible] = useState(false); // Estado para a visibilidade do menu
  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Inverte o estado de visibilidade do menu
  };
  const [agenda, setAgenda] = useState([
    { id: 1, title: 'Ritmos', time: '12:00 - 12:45', status: 'pendente' },
    { id: 2, title: 'Musculação', time: '14:00 - 15:00', status: 'pendente' },
    { id: 3, title: 'Yoga', time: '16:00 - 17:00', status: 'pendente' },
  ]);

  const handleStatusChange = (itemId) => {
    setAgenda((prevState) =>
      prevState.map((item) =>
        item.id === itemId
          ? { ...item, status: item.status === 'pendente' ? 'concluido' : 'pendente' }
          : item
      )
    );
  };

  const getButtonColor = (status) => {
    return status === 'pendente' ? '#FFA500' : '#00FF00';
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Agenda</Text>
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
      <View style={styles.semanaContainer}>
        <Text style={styles.semanaText}>D</Text>
        <Text style={styles.semanaText}>S</Text>
        <Text style={styles.semanaText}>T</Text>
        <Text style={styles.semanaText}>Q</Text>
        <Text style={styles.semanaText}>Q</Text>
        <Text style={styles.semanaText}>S</Text>
        <Text style={styles.semanaText}>S</Text>
      </View>

      <Text style={styles.title}>Agenda da Semana</Text>
      <View style={styles.cardContainer}>
        {agenda.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name="time-outline" size={24} color="#FFF" style={styles.cardIcon} />
              <Text style={styles.titlecard}>{item.title}</Text>
            </View>
            <Text style={styles.cardText}>{item.time}</Text>
            <TouchableOpacity
              style={[styles.cardButtonContainer, { backgroundColor: getButtonColor(item.status) }]}
              onPress={() => handleStatusChange(item.id)}
            >
              <Text style={styles.cardButtonText}>
                {item.status === 'pendente' ? 'Pendente' : 'Concluído'}
              </Text>
            </TouchableOpacity>
            <Ionicons name="fitness-outline" size={24} color="#FFA500" style={styles.cardIconBottom} />
          </View>
        ))}
      </View>
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
  iconsContainer: {
    flexDirection: 'row',
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
  semanaContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  semanaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 20,
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
  cardContainer: {
    flex: 1,
    paddingHorizontal: 10,
    width: '100%',
  },
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
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
  cardButtonContainer: {
    backgroundColor: '#FFA500',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
  },
  cardButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  cardIconBottom: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default AgendaPage;
