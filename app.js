let database = [];

function submitForm() {
  const ad = document.getElementById("ad").value;
  const soyad = document.getElementById("soyad").value;
  const yas = parseInt(document.getElementById("yas").value);
  const sifre = document.getElementById("sifre").value;
  const email = document.getElementById("email").value;
  const cins = document.querySelector('input[name="gender"]:checked').value;
  const hobiler = Array.from(
    document.querySelectorAll('input[name="hobi"]:checked')
  ).map((hobi) => hobi.value);

  if (yas < 18) {
    alert("Yaşınız 18-dən böyük olmalıdır.");
    return false;
  }

  if (ad.length < 3) {
    alert("Adınız 3 hərfdən az ola bilməz.");
    return false;
  }

  if (soyad.length < 3) {
    alert("Soyadınız 3 hərfdən az ola bilməz.");
    return false;
  }

  const newUser = {
    Ad: ad,
    Soyad: soyad,
    Yas: yas,
    Şifrə: sifre,
    Email: email,
    Cins: cins,
    Hobbilər: hobiler,
  };

  database.push(newUser);

  clearForm();

  return false;
}

function clearForm() {
  document.getElementById("ad").value = "";
  document.getElementById("soyad").value = "";
  document.getElementById("yas").value = "";
  document.getElementById("sifre").value = "";
  document.getElementById("email").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  Array.from(document.querySelectorAll('input[name="hobi"]:checked')).forEach(
    (hobi) => (hobi.checked = false)
  );
}

function printObjects() {
  console.log(database);
}

function printNames() {
  for (let i = 0; i < database.length; i++) {
    const name = database[i].Ad;
    console.log(name);
  }
}

function printFullNames() {
  for (let i = 0; i < database.length; i++) {
    const fullName = database[i].Ad + " " + database[i].Soyad;
    console.log(fullName);
  }
}
