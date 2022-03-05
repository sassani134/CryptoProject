require 'digest'

@ayo = Digest::SHA2.hexdigest 'abc'

print @ayo