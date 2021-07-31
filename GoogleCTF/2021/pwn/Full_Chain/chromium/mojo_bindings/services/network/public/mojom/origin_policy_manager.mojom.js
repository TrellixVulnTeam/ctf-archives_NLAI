// services/network/public/mojom/origin_policy_manager.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/origin_policy_manager.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var isolation_info$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/isolation_info.mojom', 'isolation_info.mojom.js');
  }
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../url/mojom/url.mojom.js');
  }



  function OriginPolicy(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OriginPolicy.prototype.initDefaults_ = function() {
  };
  OriginPolicy.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OriginPolicy.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OriginPolicy.encodedSize = codec.kStructHeaderSize + 0;

  OriginPolicy.decode = function(decoder) {
    var packed;
    var val = new OriginPolicy();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  OriginPolicy.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OriginPolicy.encodedSize);
    encoder.writeUint32(0);
  };
  function OriginPolicyManager_RetrieveOriginPolicy_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OriginPolicyManager_RetrieveOriginPolicy_Params.prototype.initDefaults_ = function() {
    this.origin = null;
    this.isolationInfo = null;
    this.headerValue = null;
  };
  OriginPolicyManager_RetrieveOriginPolicy_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OriginPolicyManager_RetrieveOriginPolicy_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OriginPolicyManager_RetrieveOriginPolicy_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OriginPolicyManager_RetrieveOriginPolicy_Params.isolationInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, isolation_info$.IsolationInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OriginPolicyManager_RetrieveOriginPolicy_Params.headerValue
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OriginPolicyManager_RetrieveOriginPolicy_Params.encodedSize = codec.kStructHeaderSize + 24;

  OriginPolicyManager_RetrieveOriginPolicy_Params.decode = function(decoder) {
    var packed;
    var val = new OriginPolicyManager_RetrieveOriginPolicy_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin =
        decoder.decodeStructPointer(origin$.Origin);
    val.isolationInfo =
        decoder.decodeStructPointer(isolation_info$.IsolationInfo);
    val.headerValue =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  OriginPolicyManager_RetrieveOriginPolicy_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OriginPolicyManager_RetrieveOriginPolicy_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
    encoder.encodeStructPointer(isolation_info$.IsolationInfo, val.isolationInfo);
    encoder.encodeStruct(codec.NullableString, val.headerValue);
  };
  function OriginPolicyManager_RetrieveOriginPolicy_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.prototype.initDefaults_ = function() {
    this.originPolicy = null;
  };
  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.originPolicy
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, OriginPolicy, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new OriginPolicyManager_RetrieveOriginPolicy_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.originPolicy =
        decoder.decodeStructPointer(OriginPolicy);
    return val;
  };

  OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(OriginPolicy, val.originPolicy);
  };
  function OriginPolicyManager_AddExceptionFor_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  OriginPolicyManager_AddExceptionFor_Params.prototype.initDefaults_ = function() {
    this.origin = null;
  };
  OriginPolicyManager_AddExceptionFor_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  OriginPolicyManager_AddExceptionFor_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate OriginPolicyManager_AddExceptionFor_Params.origin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  OriginPolicyManager_AddExceptionFor_Params.encodedSize = codec.kStructHeaderSize + 8;

  OriginPolicyManager_AddExceptionFor_Params.decode = function(decoder) {
    var packed;
    var val = new OriginPolicyManager_AddExceptionFor_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin =
        decoder.decodeStructPointer(origin$.Origin);
    return val;
  };

  OriginPolicyManager_AddExceptionFor_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(OriginPolicyManager_AddExceptionFor_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.origin);
  };
  var kOriginPolicyManager_RetrieveOriginPolicy_Name = 1623484403;
  var kOriginPolicyManager_AddExceptionFor_Name = 619264992;

  function OriginPolicyManagerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(OriginPolicyManager,
                                                   handleOrPtrInfo);
  }

  function OriginPolicyManagerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        OriginPolicyManager, associatedInterfacePtrInfo);
  }

  OriginPolicyManagerAssociatedPtr.prototype =
      Object.create(OriginPolicyManagerPtr.prototype);
  OriginPolicyManagerAssociatedPtr.prototype.constructor =
      OriginPolicyManagerAssociatedPtr;

  function OriginPolicyManagerProxy(receiver) {
    this.receiver_ = receiver;
  }
  OriginPolicyManagerPtr.prototype.retrieveOriginPolicy = function() {
    return OriginPolicyManagerProxy.prototype.retrieveOriginPolicy
        .apply(this.ptr.getProxy(), arguments);
  };

  OriginPolicyManagerProxy.prototype.retrieveOriginPolicy = function(origin, isolationInfo, headerValue) {
    var params_ = new OriginPolicyManager_RetrieveOriginPolicy_Params();
    params_.origin = origin;
    params_.isolationInfo = isolationInfo;
    params_.headerValue = headerValue;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kOriginPolicyManager_RetrieveOriginPolicy_Name,
          codec.align(OriginPolicyManager_RetrieveOriginPolicy_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(OriginPolicyManager_RetrieveOriginPolicy_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(OriginPolicyManager_RetrieveOriginPolicy_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  OriginPolicyManagerPtr.prototype.addExceptionFor = function() {
    return OriginPolicyManagerProxy.prototype.addExceptionFor
        .apply(this.ptr.getProxy(), arguments);
  };

  OriginPolicyManagerProxy.prototype.addExceptionFor = function(origin) {
    var params_ = new OriginPolicyManager_AddExceptionFor_Params();
    params_.origin = origin;
    var builder = new codec.MessageV0Builder(
        kOriginPolicyManager_AddExceptionFor_Name,
        codec.align(OriginPolicyManager_AddExceptionFor_Params.encodedSize));
    builder.encodeStruct(OriginPolicyManager_AddExceptionFor_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function OriginPolicyManagerStub(delegate) {
    this.delegate_ = delegate;
  }
  OriginPolicyManagerStub.prototype.retrieveOriginPolicy = function(origin, isolationInfo, headerValue) {
    return this.delegate_ && this.delegate_.retrieveOriginPolicy && this.delegate_.retrieveOriginPolicy(origin, isolationInfo, headerValue);
  }
  OriginPolicyManagerStub.prototype.addExceptionFor = function(origin) {
    return this.delegate_ && this.delegate_.addExceptionFor && this.delegate_.addExceptionFor(origin);
  }

  OriginPolicyManagerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOriginPolicyManager_AddExceptionFor_Name:
      var params = reader.decodeStruct(OriginPolicyManager_AddExceptionFor_Params);
      this.addExceptionFor(params.origin);
      return true;
    default:
      return false;
    }
  };

  OriginPolicyManagerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kOriginPolicyManager_RetrieveOriginPolicy_Name:
      var params = reader.decodeStruct(OriginPolicyManager_RetrieveOriginPolicy_Params);
      this.retrieveOriginPolicy(params.origin, params.isolationInfo, params.headerValue).then(function(response) {
        var responseParams =
            new OriginPolicyManager_RetrieveOriginPolicy_ResponseParams();
        responseParams.originPolicy = response.originPolicy;
        var builder = new codec.MessageV1Builder(
            kOriginPolicyManager_RetrieveOriginPolicy_Name,
            codec.align(OriginPolicyManager_RetrieveOriginPolicy_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(OriginPolicyManager_RetrieveOriginPolicy_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateOriginPolicyManagerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kOriginPolicyManager_RetrieveOriginPolicy_Name:
        if (message.expectsResponse())
          paramsClass = OriginPolicyManager_RetrieveOriginPolicy_Params;
      break;
      case kOriginPolicyManager_AddExceptionFor_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = OriginPolicyManager_AddExceptionFor_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateOriginPolicyManagerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kOriginPolicyManager_RetrieveOriginPolicy_Name:
        if (message.isResponse())
          paramsClass = OriginPolicyManager_RetrieveOriginPolicy_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var OriginPolicyManager = {
    name: 'network.mojom.OriginPolicyManager',
    kVersion: 0,
    ptrClass: OriginPolicyManagerPtr,
    proxyClass: OriginPolicyManagerProxy,
    stubClass: OriginPolicyManagerStub,
    validateRequest: validateOriginPolicyManagerRequest,
    validateResponse: validateOriginPolicyManagerResponse,
  };
  OriginPolicyManagerStub.prototype.validator = validateOriginPolicyManagerRequest;
  OriginPolicyManagerProxy.prototype.validator = validateOriginPolicyManagerResponse;
  exports.OriginPolicy = OriginPolicy;
  exports.OriginPolicyManager = OriginPolicyManager;
  exports.OriginPolicyManagerPtr = OriginPolicyManagerPtr;
  exports.OriginPolicyManagerAssociatedPtr = OriginPolicyManagerAssociatedPtr;
})();