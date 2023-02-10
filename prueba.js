const recojos = [
  {
    id_distrito: 1,
    id_cliente: 10,
  },
  {
    id_distrito: 1,
    id_cliente: 11,
  },
  {
    id_distrito: 1,
    id_cliente: 12,
  },
  {
    id_distrito: 1,
    id_cliente: 13,
  },
  {
    id_distrito: 1,
    id_cliente: 14,
  },
  {
    id_distrito: 2,
    id_cliente: 15,
  },
  {
    id_distrito: 2,
    id_cliente: 16,
  },
  {
    id_distrito: 2,
    id_cliente: 17,
  },
  {
    id_distrito: 2,
    id_cliente: 18,
  },
];

const motos = [
  {
    id_distrito: 1,
    id_motorizado: 10,
  },
  {
    id_distrito: 2,
    id_motorizado: 10,
  },
  {
    id_distrito: 1,
    id_motorizado: 11,
  },
];

const MAX_RECOJOS = 4;
const recojosSobrantes = [...recojos];
console.log("RECOJOS SOBRANTES", recojosSobrantes);

for (let i = 0; i < motos.length; i++) {
  let recojoByMoto = 0;
  console.log(`--- Ciclo de motorizado ${motos[i].id_motorizado} ---`);
  for (let j = 0; j < recojos.length; j++) {
    if (motos[i].id_distrito === recojos[j].id_distrito) {
      if (recojoByMoto < MAX_RECOJOS) {
        if (recojosSobrantes.includes(recojos[j])) {
          console.log("AGREGANDO A RECOJOS");
          console.log("Motorizado asignado: ", motos[i]);
          console.log("Distrito asignada: ", recojos[j]);
          let recojoIndex = recojosSobrantes.indexOf(recojos[j]);
          if (recojoIndex > -1) recojosSobrantes.splice(recojoIndex, 1);
          recojoByMoto++;
          console.log("Cantidad de recojos: ", recojoByMoto);
        } else {
          console.log(
            `El recojo {${recojos[j].id_distrito}, ${recojos[j].id_cliente}} YA FUE AGREGADO`
          );
        }
      } else {
        console.log("LLEGASTE AL MÁXIMO");
        console.log("Recojos para este distrito pendiente: ", recojosSobrantes);
      }
    }
  }

  console.log(`Cantidad de recojos sobrantes: ${recojosSobrantes.length}`);
  console.log(
    `----- Termina ciclo de motorizado ${motos[i].id_motorizado} -----\n`
  );
}
