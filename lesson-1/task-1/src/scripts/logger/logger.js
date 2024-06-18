export const createLogger = (loggerName) => {
  const logs = [];

  return {
    log(message) {
      logs.push(`log - ${loggerName} - ${message}`);
    },
    error(errorText) {
      logs.push(`error - ${loggerName} - ${errorText}`);
    },
    getLogs() {
      return logs;
    },
  };
};
