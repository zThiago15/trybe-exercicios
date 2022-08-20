const isAdmin = (payload) => {
  const { username, password } = payload;
  if (password === 's3nh4S3gur4???' && username === 'admin') {
    return true;
  }

  return false;
};

module.exports = isAdmin;