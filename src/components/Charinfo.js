

import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Input, Button, InputGroup} from "reactstrap";
import CharacterComp from "./Charactercomp";

/****Assets****/

import './Assets/Charinfo.css'
import sword from './Assets/swordbglg.jpg'


/******Fetches******/

const Charinfo = (props) => {
  const [characterName, setCharacterName] = useState("");
  const [alignment, setAlignment] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [level, parseLevel] = useState("");
  const [deity, setDeity] = useState("");
  const [race, setRace] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [physicalDescription, setPhysicalDescription] = useState("");
  // const [acItem, setAcItem] = useState("");
  // const [acItemTwo, setAcItemTwo] = useState("");
  // const [acItemThree, setAcItemThree] = useState("");
  // const [acItemFour, setAcItemFour] = useState("");
  // const [acItemFive, setAcItemFive] = useState("");
  // const [shield, setShield] = useState("");
  // const [strength, setStrength] = useState("");
  // const [strengthModifier, setStrengthModifier] = useState("");
  // const [dexterity, setDexterity] = useState("");
  // const [dexterityModifier, setDexterityModifier] = useState("");
  // const [constitution, setConstitution] = useState("");
  // const [conModifier, setConModifier] = useState("")
  // const [intelligence, setIntelligence] = useState("");
  // const [intModifier, setIntModifier] = useState("");
  // const [wisdom, setWisdom] = useState("");
  // const [wisModifier, setWisModifier] = useState("");
  // const [charisma, setCharisma] = useState("");
  // const [charModifier, setCharModifier] = useState(""); 
  // const [charInfo, setCharInfo] = useState([]);
  // const [appraise, setAppraise] = useState("");
  // const [acrobatics, setAcrobatics] = useState("");
  // const [bluff, setBluff] = useState("");
  // const [climb, setClimb] = useState("");
  // const [craft, setCraft] = useState("");
  // const [craftTwo, setCraftTwo] = useState("");
  // const [diplomacy, setDiplomacy] = useState("");
  // const [disableDevice, setDisableDevice] = useState("");
  // const [disguise, setDisguise] = useState("");
  // const [escapeArtist, setEscapeArtist] = useState("");
  // const [fly, setFly] = useState("");
  // const [handleAnimal, setHandleAnimal] = useState("");
  // const [heal, setHeal] = useState("");
  // const [intimidate, setIntimidate] = useState("");
  // const [knowledgeArcana, setKnowledgeArcana] = useState("");
  // const [knowledgeHistory, setKnowlegeHistory]  = useState("");
  // const [knowledgeLocal, setKnowledgeLocal] = useState("");
  // const [knowledgeReligion, setKnowledgeReligion] = useState("");
  // const [knowledgeOther, setKnowledgeOther] = useState("");
  // const [linguistics, setLinguistics] = useState("");
  // const [perception, setPerception] = useState("");
  // const [perform, setPerform] = useState("");
  // const [profession, setProfession] = useState("");
  // const [ride, setRide] = useState("");
  // const [senseMotive, setSenseMotive] = useState("");
  // const [sleightOfHand, setSleightOfHand] = useState("");
  // const [stealth, setStealth] = useState("");
  // const [spellcraft, setSpellcraft] = useState("");
  // const [survival, setSurvival] = useState("");
  // const [swim, setSwim] = useState("");
  // const [useMagicDevice, setUseMagicDevice] = useState(""); 
  // const [languages, setLanguages] = useState("");
  // const [firstLevelSpells, setFirstLevelSpells] = useState("");
  // const [secondLevelSpells, setSecondLevelSpells] = useState("");
  // const [ thirdLevelSpells, setThirdLevelSpells] = useState("");             
  // const [fourthLevelSpells, setFourthLevelSpells] = useState("");
  // const [fifthLevelSpells, setFifthLevelSpells] = useState("");
  // const [sixthLevelSpells, setSixthLevelSpells] = useState("");
  // const [seventhLevelSpells, setSeventhLevelSpells] = useState("");
  // const [eigthLevelSpells, setEigthLevelSpells] = useState("");
  // const [ninthLevelSpells, setNinthLevelSpells] = useState("");
  // const [weaponOne, setWeaponOne] = useState("");
  // const [attackBonus, setAttackBonus] = useState("");
  // const [criticalRange, setCriticalRange] = useState("");
  // const [weaponType, setWeaponType] = useState("");
  // const [range, setRange] = useState("");
  // const [ammunition, setAmmunition] = useState("");
  // const [damage, setDamage] = useState("")






  const fetchCharinfo = (e) => {
 
    console.log('fetching?')
    fetch("http://localhost:5500/charinfo/create", {
      method: "POST",
      body: JSON.stringify({
        charinfo: {
          characterName: characterName,
          playerName: playerName,
          alignment: alignment,
          level: level,
          deity: deity,
          race: race,
          size: size,
          gender: gender,
          age: age,
          height: height,
          weight: weight,
          physicalDescription: physicalDescription,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((charinfoData) => {
        console.log(charinfoData);
       // setCharInfo(charinfoData);
      }).catch(err => console.log(err))
  };
  // useEffect(() => {
  //   fetchCharinfo();
  // }, []);

  
  // const fetchGear = (e) => {
  //   e.preventDefault()
  //   console.log('working?')
  //   fetch("http://localhost:5500/gear/create", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       gear: {
  //         acItem: acItem,
  //         acItemTwo: acItemTwo,
  //         acItemThree: acItemThree,
  //         acItemFour: acItemFour,
  //         acItemFive: acItemFive, 
  //         shield:shield
  //       },
        
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${props.token}`,
  //     }),
  //   })
  //   .then((res) => res.json())
  //   .then((gearData) => {
  //     console.log(gearData);
  //     // setGear(gearData);
  //   }).catch(err => console.log(err))
    
  // }; 
  
  // const fetchSpecs = (e) => {
  //   e.preventDefault()
  //   console.log('are you there?')
  //   fetch("http://localhost:5500/specs/create", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       specs: {
  //         strength: strength,
  //         strengthModifier: strengthModifier,
  //         dexterity: dexterity,
  //         dexterityModifier: dexterityModifier,
  //         constitution: constitution,
  //         conModifier: conModifier,
  //         intelligence: intelligence,
  //         intModifier: intModifier,
  //         wisdom: wisdom,
  //         wisModifier: wisModifier,
  //         charisma: charisma,
  //         charModifier: charModifier, 
  //       },
        
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${props.token}`,
  //     }),
  //   })
  //   .then((res) => res.json())
  //   .then((specsData) => {
  //     console.log(specsData);
  //     // setGear(gearData);
  //   }).catch(err => console.log(err))
    
  // }; 
  
  // const fetchSkills = (e) => {
  //   e.preventDefault()
  //   console.log('are you there?')
  //   fetch("http://localhost:5500/skills/create", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       skills: {
  //         appraise: appraise, 
  //         acrobatics: acrobatics, 
  //         bluff: bluff,
  //         climb: climb, 
  //         craft: craft, 
  //         craftTwo: craftTwo,
  //         diplomacy: diplomacy, 
  //         disableDevice: disableDevice, 
  //         disguise: disguise,
  //         escapeArtist: escapeArtist, 
  //         fly:fly, 
  //         handleAnimal: handleAnimal,
  //         heal: heal, 
  //         intimidate: intimidate, 
  //         knowledgeArcana: knowledgeArcana,
  //         knowledgeHistory: knowledgeHistory, 
  //         knowledgeLocal: knowledgeLocal, 
  //         knowledgeReligion: knowledgeReligion,
  //         knowledgeOther: knowledgeOther, 
  //         linguistics: linguistics, 
  //         perception: perception,
  //         perform: perform, 
  //         profession: profession, 
  //         ride: ride,
  //         senseMotive: senseMotive, 
  //         sleightOfHand: sleightOfHand, 
  //         stealth: stealth,
  //         spellcraft:spellcraft, 
  //         survival: survival, 
  //         swim: swim,
  //         useMagicDevice: useMagicDevice, 
  //         languages: languages
  //       },
        
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${props.token}`,
  //     }),
  //   })
  //   .then((res) => res.json())
  //   .then((skillsData) => {
  //     console.log(skillsData);
  //     // setGear(gearData);
  //   }).catch(err => console.log(err))
    
  // };
  
  // const fetchSpells = (e) => {
  //   e.preventDefault()
  //   console.log('abra cadabra?')
  //   fetch("http://localhost:5500/spells/create", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       spells: {
  //         firstLevelSpells:firstLevelSpells,
  //         secondLevelSpells:secondLevelSpells,
  //         thirdLevelSpells:thirdLevelSpells,
  //         fourthLevelSpells:fourthLevelSpells,
  //         fifthLevelSpells:fifthLevelSpells,
  //         sixthLevelSpells:sixthLevelSpells,
  //         seventhLevelSpells:seventhLevelSpells,
  //         eigthLevelSpells:eigthLevelSpells,
  //         ninthLevelSpells:ninthLevelSpells
  //       },
        
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${props.token}`,
  //     }),
  //   })
  //   .then((res) => res.json())
  //   .then((spellsData) => {
  //     console.log(spellsData);
  //     // setGear(gearData);
  //   }).catch(err => console.log(err))
    
  // }; 

  // const fetchWeapon = (e) => {
  //   e.preventDefault()
  //   console.log('pew pew?')
  //   fetch("http://localhost:5500/weapon/create", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       weapon: {
  //         weaponOne:weaponOne,
  //         attackBonus:attackBonus,
  //         criticalRange:criticalRange,
  //         weaponType:weaponType,
  //         range:range,
  //         ammunition:ammunition,
  //         damage:damage,
  //       },
        
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${props.token}`,
  //     }),
  //   })
  //   .then((res) => res.json())
  //   .then((weaponData) => {
  //     console.log(weaponData);
  //     // setGear(gearData);
  //   }).catch(err => console.log(err))
    
  // }; 



  /*******************************************/


  /****Inline Styling******/

  const buttonStyles = {
    marginTop: '10px'
  }

  const h3Styles = {
  
    color: 'white',
    textAlign: 'center',
  
  }

      const formStylesCI = {
        backgroundColor: 'rgba(246, 36, 89, .7)'


      }

      const gearStyles = {
        backgroundColor: 'rgba(30, 130, 76, .7)'
      }
      
      const abilityStyles = {
        backgroundColor: 'rgba(155, 89, 182, .7)',
        width: '300px'

      }


      const skillStyles = {
        backgroundColor: 'rgba(247, 202, 24, .7)',
        width: '350px'        
      }

      const spellStyles = {
        backgroundColor: 'rgba(108, 122, 137, .7)'
      }


      const weaponStyles = {
        backgroundColor: 'rgba(241, 90, 34, .7)'
      }


      const h1Styles = {
        color: 'white',
        position: 'center',
        textAlign: 'center',
        marginTop: '50px',
        
      }

    const inputStyles = {
       marginLeft: '5px'
    }
    
    const inputStylesTwo = {
      flexDirection: 'row',
      float: 'right'
    }

      /*****************************************************/    





/**********Forms***********/


  return (
    <>
         <h1 style={h1Styles}>Character Sheet</h1>

         {/******Character Attributes******** */}
      
      <Form onSubmit={fetchCharinfo} style={formStylesCI}>
      <h3 style={h3Styles}>Character Information</h3>
        <FormGroup>
          <Label htmlFor="Name">Character Name</Label>
          <Input style={inputStyles}
            name="characterName"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="playerName">Player Name</Label>
          <Input style={inputStyles}
            name="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="alignment">Alignment</Label>
          <Input style={inputStyles}
            name="alignment"
            value={alignment}
            onChange={(e) => setAlignment(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="level">Level</Label>
          <Input style={inputStyles}
            name="level"
            value={level}
            onChange={(e) => parseLevel(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="deity">Deity</Label>
          <Input style={inputStyles}
            name="deity"
            value={deity}
            onChange={(e) => setDeity(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="race">Race</Label>
          <Input style={inputStyles}
            name="race"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="size">Size</Label>
          <Input style={inputStyles}
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="gender">Gender</Label>
          <Input style={inputStyles}
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Age</Label>
          <Input style={inputStyles}
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="height">Height</Label>
          <Input style={inputStyles}
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="weight">Weight</Label>
          <Input style={inputStyles}
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="physicalDescription">Physical Description</Label>
          <Input style={inputStyles}
            name="physicalDescription"
            value={physicalDescription}
            onChange={(e) => setPhysicalDescription(e.target.value)}
          ></Input>
        </FormGroup>
    
        <Button style={buttonStyles} type="submit">Save</Button>
      </Form>
        <img src={sword} alt="sword background"/>
    </>
  );
};

export default Charinfo;
