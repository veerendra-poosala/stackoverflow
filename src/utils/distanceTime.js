function distanceTime(epochTime){
    if (isNaN(epochTime)) {
        return ;
      }
    const now = Math.floor(Date.now() / 1000); 
    const diffInSeconds = now - epochTime;
  
    if (diffInSeconds < 60) {
      return 'Less than a minute ago';
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${Number(diffInMinutes)} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const diffInHours = Math.floor(diffInSeconds / 3600);
      return `${Number(diffInHours)} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 604800) { 
      const diffInDays = Math.floor(diffInSeconds / 86400);
      return `${Number(diffInDays)} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 2592000) { 
      const diffInWeeks = Math.floor(diffInSeconds / 604800);
      return `${Number(diffInWeeks)} week${diffInWeeks > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 31536000) { 
      const diffInMonths = Math.floor(diffInSeconds / 2592000);
      return `${Number(diffInMonths)} month${diffInMonths > 1 ? 's' : ''} ago`;
    } else {
      const diffInYears = Math.floor(diffInSeconds / 31536000);
      return `${Number(diffInYears)} year${diffInYears > 1 ? 's' : ''} ago`;
    }
  }

  export default distanceTime;