/** DDI 55 + DDD + celular de 9 dígitos. */
const BR_MOBILE = /^55\d{2}9\d{8}$/;

export function whatsappUrl(number: string, message: string) {
  if (!BR_MOBILE.test(number)) {
    throw new Error(`Número de WhatsApp inválido: ${number}`);
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function unitMessage(unitName: string) {
  return `Olá! Vim pelo site e quero saber mais sobre a AcquaFit ${unitName}.`;
}

export function formatPhone(number: string) {
  const local = number.slice(2);
  return `(${local.slice(0, 2)}) ${local.slice(2, 7)}-${local.slice(7)}`;
}
