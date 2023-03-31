const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short'
    };
    return new Date(date).toLocaleString('en-US', options);
  };
  
  module.exports = formatDate;