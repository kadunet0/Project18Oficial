import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';



// Componente de exercício individual
const ExerciseItem = ({ exercise, }) => {
  return (
    <View style={styles.exerciseItem}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <View style={styles.exerciseDetails}>
        <Text style={styles.repetitionText}>{exercise.repetitions}</Text>
        <Text style={styles.quantityText}>{exercise.quantity}</Text>
      </View>
    </View>
  );
};

// Componente da página de Treino
const TreinoPage = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Inverte o estado de visibilidade do menu
  };

  const [exercises, setExercises] = useState([
    { id: 1, name: 'MOBILIDADE DE OMBRO COM BASTÃO', repetitions: 10, quantity: 3 },
    { id: 2, name: 'SUPINO MÁQUINA', repetitions: 12, quantity: 3 },
    { id: 3, name: 'DESENVOLVIMENTO MÁQUINA PRONADA', repetitions: 8, quantity: 4 },
    { id: 4, name: 'TRÍCEPS MÁQUINA FECHADO', repetitions: 15, quantity: 3 },
    { id: 5, name: 'PUXADA PELA FRENTE PRONADA', repetitions: 10, quantity: 3 },
    { id: 6, name: 'REMADA ALTA COM BARRA', repetitions: 12, quantity: 3 },
    { id: 7, name: 'BÍCEPS BARRA RETA', repetitions: 8, quantity: 4 },
    { id: 8, name: 'ABDOMINAL NA MÁQUINA', repetitions: 15, quantity: 3 },
  ]);

  const handleInputChange = (exerciseId, repetitions) => {
    const updatedExercises = exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        return { ...exercise, repetitions };
      }
      return exercise;
    });
    setExercises(updatedExercises);
  };

  const handleStartButtonPress = () => {
    // Prepara os dados do treino para enviar ao servidor
    const data = exercises.map((exercise) => ({
      nome: exercise.name,
      repeticoes: exercise.repetitions,
      quantidade: exercise.quantity,
    }));
    
    
    // Envia a solicitação POST ao servidor para inserir os dados no banco de dados
    axios.post('http://192.168.1.4:3001/item', data)
      .then((response) => {
        console.log('Dados inseridos com sucesso:', response.data);
        // Faça algo com a resposta do servidor, se necessário
      })
      .catch((error) => {
        console.error('Erro ao inserir dados:', error);
        // Trate o erro adequadamente
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Treino</Text>
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
        {exercises.map((exercise, index) => (
          <View key={exercise.id}>
            <ExerciseItem
              exercise={exercise}
              onInputChange={handleInputChange}
            />
            {index !== exercises.length - 1 && <View style={styles.divider} />}
          </View>
          
        ))}
        <View style={styles.startButtonContainer}>
        <Text style={styles.startButtonText} onPress={handleStartButtonPress}>
          Começar
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  scrollView: {
    paddingTop:55,
    width:'92%',
  },
 
  exerciseName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  exerciseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  repetitionText: {
    fontSize: 10,
    color: '#FFF',
  },
  quantityText: {
    fontSize: 10,
    color: '#FFF',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: 10,
  },
  startButtonContainer: {
    backgroundColor: '#FFA500',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
    
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default TreinoPage;
